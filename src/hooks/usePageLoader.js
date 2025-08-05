// src/hooks/usePageLoader.js
import { useEffect, useRef } from 'react';
import { useLoading } from '../contexts/LoadingContext';

// Глобальный кеш загруженных страниц в рамках одной сессии
const loadedPages = new Set();

export const usePageLoader = (images = [], loadingText = 'Завантаження...', options = {}) => {
  const { startLoading, updateProgress, stopLoading } = useLoading();
  const hasLoadedRef = useRef(false);

  const {
    strategy = 'priority',
    maxImages = 8,
    shouldLoad = true,
    resetOnChange = false,
    pageId = null,
    minLoadingTime = 800
  } = options;

  useEffect(() => {
    let cleanupTimer = null;

    // === КЛЮЧЕВОЕ ИЗМЕНЕНИЕ ===
    // 1. Проверяем, если shouldLoad = false, то лоадер не нужен.
    if (!shouldLoad) {
      stopLoading(); // Гарантируем, что лоадер отключён
      return;       // И сразу выходим из хука
    }
    
    // 2. Затем проверяем кэш, если shouldLoad = true
    const pageAlreadyLoaded = pageId && loadedPages.has(pageId);
    if (pageAlreadyLoaded && !resetOnChange) {
      stopLoading();
      return;
    }
    // ======================

    const startTime = Date.now();
    startLoading(loadingText);
    
    const finishLoading = () => {
      hasLoadedRef.current = true;
      if (pageId) loadedPages.add(pageId);
      stopLoading();
    };

    if (images.length === 0) {
      const minDelay = Math.max(minLoadingTime - (Date.now() - startTime), 200);
      cleanupTimer = setTimeout(finishLoading, minDelay);
    } else {
      let imagesToLoad = [];
      switch (strategy) {
        case 'hero':
          imagesToLoad = images.slice(0, Math.min(5, images.length));
          break;
        case 'priority':
          imagesToLoad = images.slice(0, Math.min(maxImages, images.length));
          break;
        case 'minimal':
          imagesToLoad = images.slice(0, Math.min(4, images.length));
          break;
        default:
          imagesToLoad = images.slice(0, Math.min(6, images.length));
      }

      let loadedCount = 0;
      const preloadPromises = imagesToLoad.map((imageSrc) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = img.onerror = () => {
            loadedCount++;
            updateProgress((loadedCount / imagesToLoad.length) * 100);
            resolve();
          };
          img.src = imageSrc;
        });
      });

      Promise.all(preloadPromises).then(() => {
        const elapsed = Date.now() - startTime;
        const remainingTime = Math.max(minLoadingTime - elapsed, 200);
        cleanupTimer = setTimeout(() => {
          finishLoading();
          if (images.length > imagesToLoad.length) {
            preloadRemainingImages(images.slice(imagesToLoad.length));
          }
        }, remainingTime);
      });
    }

    return () => {
      if (cleanupTimer) {
        clearTimeout(cleanupTimer);
      }
    };
  }, [images.length, shouldLoad, resetOnChange, pageId, minLoadingTime, loadingText, startLoading, stopLoading, updateProgress, hasLoadedRef]);
  
  const preloadRemainingImages = (remainingImages) => {
    remainingImages.forEach((imageSrc, index) => {
      setTimeout(() => {
        const img = new Image();
        img.src = imageSrc;
      }, index * 150);
    });
  };

  const clearCache = (specificPageId = null) => {
    if (specificPageId) {
      loadedPages.delete(specificPageId);
    } else {
      loadedPages.clear();
    }
  };

  const resetLoader = () => {
    hasLoadedRef.current = false;
  };

  return { resetLoader, clearCache };
};
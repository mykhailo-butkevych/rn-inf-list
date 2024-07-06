# Project Overview

## Purpose

The primary purpose of this application is to allow users to search for images and manage their favorites list. The app features a simple and intuitive tab-based navigation with two main tabs:

- **Home**: Users can search for images using a search bar. They can also add or remove images from their favorites list directly from the search results.
- **Favorites**: Users can view their recently added favorite images. This tab also allows users to remove images from their favorites list.

## Key Libraries

This project leverages several third-party libraries to enhance the user experience and streamline development:

- **`@candlefinance/faster-image`**: A performant image component designed to load images quickly and efficiently.
- **`@react-navigation/bottom-tabs`**: Provides bottom tab navigation support, allowing for an intuitive and accessible navigation experience.
- **`@shopify/flash-list`**: An advanced, high-performance alternative to FlatList for displaying large lists of images smoothly.
- **`@tanstack/react-query`**: Manages and caches asynchronous data, making data fetching and state synchronization easier and more efficient.
- **`axios`**: A popular HTTP client for making comfortable and straightforward HTTP requests.
- **`zustand`**: A small, fast, and scalable state management solution used to store and manage the user's favorite images.

## Folder Structure

Our project is organized into the following key directories:

- **`api/`**: Functions and modules for API calls and network requests.
- **`assets/`**: Static assets like images, fonts, and other media files.
- **`components/`**: Reusable UI components used across the application.
- **`constants/`**: Static data and configuration settings.
- **`hooks/`**: Custom React hooks encapsulating reusable logic.
- **`navigation/`**: Navigation structure, including navigators and routes.
- **`screens/`**: Main screens or pages of the application.
- **`styles/`**: Global styles and theme-related files.
- **`utils/`**: Utility functions and helper modules.
- **`types/`**: TypeScript type definitions, including custom types and interfaces.

Each directory serves a specific purpose to keep the codebase organized and maintainable.

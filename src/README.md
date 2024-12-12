# Project Architecture

## Layers

### app/
Global application configuration, providers, and entry points.

### processes/
Complex business processes that orchestrate multiple features.

### pages/
Page components and routing logic.

### widgets/
Complex components composed of multiple features and entities.

### features/
User interactions and business logic implementations.

### entities/
Business entities and their associated logic.

### shared/
Shared utilities, types, and components.

## Communication Patterns
1. Layer N can only import from layer N+1 below it
2. Shared layer is accessible by all
3. Use public API patterns (index.ts files)
4. No circular dependencies
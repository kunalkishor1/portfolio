# Portfolio Website - Kunal Kishor

## Overview

This is a modern, professional portfolio website for Kunal Kishor, a Software Engineer specializing in Java, Python, SQL, and Web Development. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a clean, responsive design with smooth animations and interactive components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution
- **Build Process**: esbuild for production bundling
- **Middleware**: Custom logging and error handling middleware

### Database & ORM
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Schema Location**: `shared/schema.ts` for type-safe database operations
- **Connection**: Uses `@neondatabase/serverless` for serverless PostgreSQL

## Key Components

### Frontend Components
1. **Navigation**: Responsive navigation with smooth scrolling and active section tracking
2. **Hero Section**: Dynamic introduction with gradient text effects and social links
3. **About Section**: Professional overview with personal photo and journey description
4. **Skills Section**: Interactive skill display with progress bars and categorization
5. **Projects Portfolio**: Showcase of key projects with technology badges and links
6. **Experience Timeline**: Professional and educational experience with detailed descriptions
7. **Certifications**: Professional certifications and achievements display
8. **Contact Form**: Interactive contact form with toast notifications
9. **Footer**: Simple footer with copyright information

### Backend Services
1. **Contact API**: Handles contact form submissions (`/api/contact`)
2. **Resume Download**: Provides resume download functionality (`/api/resume/download`)
3. **User Management**: Basic user CRUD operations (for future expansion)
4. **Static File Serving**: Serves the built React application

### Shared Resources
- **Database Schema**: Centralized schema definitions in `shared/schema.ts`
- **Type Definitions**: Shared TypeScript types between frontend and backend
- **Validation Schemas**: Zod schemas for data validation

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **Form Submissions**: Contact form data flows through validation to backend processing
3. **Database Operations**: Backend uses Drizzle ORM for type-safe database queries
4. **Static Assets**: Vite serves static assets during development, Express serves built assets in production
5. **Real-time Updates**: React Query handles caching and synchronization of server state

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Hook Form, TanStack React Query
- **UI Framework**: Radix UI primitives, Tailwind CSS, Framer Motion
- **Backend**: Express.js, connect-pg-simple for session management
- **Database**: Drizzle ORM, @neondatabase/serverless, PostgreSQL
- **Development**: Vite, TypeScript, TSX, esbuild
- **Validation**: Zod for schema validation
- **Utilities**: date-fns, clsx, class-variance-authority

### Development Tools
- **Build System**: Vite with React plugin and runtime error overlay
- **TypeScript**: Strict type checking with path mapping
- **Database**: Drizzle Kit for migrations and schema management
- **Replit Integration**: Cartographer plugin for development environment

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR and error overlay
- **Backend**: TSX for direct TypeScript execution
- **Database**: Development database with push migrations
- **Integration**: Replit-specific plugins for development experience

### Production Build
- **Frontend**: Vite build process outputs to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static files served by Express in production
- **Database**: Migration-based schema deployment

### Environment Configuration
- **Database URL**: Required `DATABASE_URL` environment variable
- **Node Environment**: `NODE_ENV` for environment-specific behavior
- **Build Scripts**: Separate development and production commands

## Changelog
```
Changelog:
- July 03, 2025. Initial setup
- July 03, 2025. Added PostgreSQL database integration
  - Created contact submissions table
  - Implemented database storage for contact form
  - Added input validation and error handling
  - Integrated Drizzle ORM with Neon PostgreSQL
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```
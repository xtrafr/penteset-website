# Cybersecurity Learning Platform - Design Document

## Overview

The cybersecurity learning platform is designed as a modern, scalable web application that provides interactive cybersecurity education with hands-on vulnerable lab environments. The platform uses a microservices architecture with containerized vulnerable applications for safe, isolated practice environments.

## Architecture

### High-Level Architecture

```mermaid
graph TB
    subgraph "Frontend Layer"
        UI[React/Next.js Frontend]
        PWA[Progressive Web App]
    end
    
    subgraph "API Gateway"
        Gateway[API Gateway/Load Balancer]
    end
    
    subgraph "Core Services"
        Auth[Authentication Service]
        User[User Management Service]
        Content[Content Management Service]
        Progress[Progress Tracking Service]
        Assessment[Assessment Service]
        Lab[Lab Management Service]
    end
    
    subgraph "Infrastructure"
        DB[(PostgreSQL Database)]
        Redis[(Redis Cache)]
        Storage[File Storage (S3/MinIO)]
    end
    
    subgraph "Lab Environment"
        Docker[Docker Engine]
        VulnApps[Vulnerable Applications]
        Network[Isolated Networks]
    end
    
    UI --> Gateway
    Gateway --> Auth
    Gateway --> User
    Gateway --> Content
    Gateway --> Progress
    Gateway --> Assessment
    Gateway --> Lab
    
    Auth --> DB
    User --> DB
    Content --> DB
    Progress --> DB
    Assessment --> DB
    Lab --> Docker
    
    Content --> Storage
    Lab --> VulnApps
    Docker --> Network
```

### Technology Stack

**Frontend:**
- React 18 with Next.js 14 for server-side rendering and performance
- TypeScript for type safety
- Tailwind CSS for responsive, modern UI design
- React Query for efficient data fetching and caching
- i18next for internationalization (Euskera/Spanish support)

**Backend:**
- Node.js with Express.js for API services
- TypeScript for consistent development experience
- JWT for authentication and authorization
- Docker for containerization of services and vulnerable labs
- PostgreSQL for primary data storage
- Redis for session management and caching

**Infrastructure:**
- Docker Compose for local development
- Kubernetes for production deployment
- NGINX as reverse proxy and load balancer
- MinIO or AWS S3 for file storage
- Prometheus and Grafana for monitoring

## Components and Interfaces

### 1. Authentication Service

**Responsibilities:**
- User registration and login
- JWT token generation and validation
- Password reset functionality
- Role-based access control (Student, Educator, Admin)

**Key Interfaces:**
```typescript
interface AuthService {
  register(userData: UserRegistration): Promise<AuthResponse>
  login(credentials: LoginCredentials): Promise<AuthResponse>
  validateToken(token: string): Promise<TokenValidation>
  resetPassword(email: string): Promise<void>
}

interface UserRegistration {
  email: string
  password: string
  firstName: string
  lastName: string
  preferredLanguage: 'eu' | 'es'
  role: 'student' | 'educator'
}
```

### 2. Content Management Service

**Responsibilities:**
- Lesson content delivery in multiple languages
- Multimedia content management
- Learning path organization
- Content versioning and updates

**Key Interfaces:**
```typescript
interface ContentService {
  getLessonsByPath(pathId: string, language: string): Promise<Lesson[]>
  getLessonContent(lessonId: string, language: string): Promise<LessonContent>
  getMultimediaContent(contentId: string): Promise<MediaContent>
  updateLessonProgress(userId: string, lessonId: string): Promise<void>
}

interface Lesson {
  id: string
  title: Record<string, string> // Multi-language support
  description: Record<string, string>
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedDuration: number
  prerequisites: string[]
  content: LessonContent
}
```

### 3. Lab Management Service

**Responsibilities:**
- Vulnerable application deployment
- Container lifecycle management
- Network isolation and security
- Lab session monitoring

**Key Interfaces:**
```typescript
interface LabService {
  deployLab(labId: string, userId: string): Promise<LabInstance>
  getLabStatus(instanceId: string): Promise<LabStatus>
  resetLab(instanceId: string): Promise<void>
  terminateLab(instanceId: string): Promise<void>
}

interface LabInstance {
  id: string
  labId: string
  userId: string
  containerUrl: string
  status: 'deploying' | 'ready' | 'error'
  createdAt: Date
  expiresAt: Date
}
```

### 4. Progress Tracking Service

**Responsibilities:**
- Learning progress monitoring
- Achievement tracking
- Performance analytics
- Report generation

**Key Interfaces:**
```typescript
interface ProgressService {
  getUserProgress(userId: string): Promise<UserProgress>
  updateLessonCompletion(userId: string, lessonId: string, score?: number): Promise<void>
  getProgressReport(userId: string, dateRange?: DateRange): Promise<ProgressReport>
  getClassroomAnalytics(educatorId: string): Promise<ClassroomAnalytics>
}
```

## Data Models

### Core Entities

```typescript
// User Management
interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'student' | 'educator' | 'admin'
  preferredLanguage: 'eu' | 'es'
  createdAt: Date
  lastLoginAt: Date
  isActive: boolean
}

// Content Structure
interface LearningPath {
  id: string
  name: Record<string, string>
  description: Record<string, string>
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  lessons: string[] // Lesson IDs in order
  estimatedHours: number
}

interface LessonContent {
  id: string
  type: 'theory' | 'practical' | 'assessment'
  content: Record<string, any> // Multi-language content
  multimedia: MediaReference[]
  exercises: Exercise[]
  quiz?: Quiz
}

// Vulnerable Labs
interface VulnerableLab {
  id: string
  name: Record<string, string>
  description: Record<string, string>
  vulnerabilityTypes: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  dockerImage: string
  networkConfig: NetworkConfig
  hints: Record<string, string[]>
}

// Progress Tracking
interface UserProgress {
  userId: string
  completedLessons: LessonProgress[]
  currentPath?: string
  totalHoursSpent: number
  achievements: Achievement[]
  lastActivity: Date
}

interface LessonProgress {
  lessonId: string
  completedAt: Date
  score?: number
  timeSpent: number
  attempts: number
}
```

## Error Handling

### Error Categories

1. **Authentication Errors**
   - Invalid credentials
   - Expired tokens
   - Insufficient permissions

2. **Content Errors**
   - Missing lessons or content
   - Language not supported
   - Corrupted multimedia files

3. **Lab Deployment Errors**
   - Container deployment failures
   - Network configuration issues
   - Resource limitations

4. **Data Validation Errors**
   - Invalid user input
   - Missing required fields
   - Data format mismatches

### Error Response Format

```typescript
interface ErrorResponse {
  error: {
    code: string
    message: Record<string, string> // Multi-language error messages
    details?: any
    timestamp: Date
    requestId: string
  }
}
```

### Error Handling Strategy

- **Client-side**: React Error Boundaries for UI error handling
- **API Gateway**: Centralized error logging and response formatting
- **Services**: Structured error throwing with proper HTTP status codes
- **Database**: Transaction rollbacks and data consistency checks
- **Lab Management**: Automatic cleanup of failed deployments

## Testing Strategy

### Unit Testing
- Jest for JavaScript/TypeScript unit tests
- React Testing Library for component testing
- Minimum 80% code coverage requirement
- Automated testing in CI/CD pipeline

### Integration Testing
- API endpoint testing with Supertest
- Database integration tests with test containers
- Service-to-service communication testing

### Security Testing
- OWASP ZAP integration for vulnerability scanning
- Container security scanning with Trivy
- Dependency vulnerability checking with npm audit
- Penetration testing of the platform itself (ironic but necessary)

### Performance Testing
- Load testing with Artillery or k6
- Database query performance monitoring
- Container resource usage optimization
- CDN performance for multimedia content

### End-to-End Testing
- Playwright for browser automation testing
- Critical user journey testing
- Multi-language interface testing
- Lab deployment and access testing

## Security Considerations

### Platform Security
- HTTPS enforcement with TLS 1.3
- Content Security Policy (CSP) headers
- Rate limiting on API endpoints
- Input validation and sanitization
- SQL injection prevention with parameterized queries

### Lab Environment Security
- Container isolation with restricted privileges
- Network segmentation for lab environments
- Automatic session timeouts and cleanup
- Resource limits to prevent DoS attacks
- Monitoring for suspicious activities

### Data Protection
- GDPR compliance for user data
- Encrypted data at rest and in transit
- Regular security audits and updates
- Secure backup and recovery procedures
- Privacy-by-design principles

## Scalability and Performance

### Horizontal Scaling
- Microservices architecture for independent scaling
- Load balancing across multiple instances
- Database read replicas for improved performance
- CDN for static content delivery

### Caching Strategy
- Redis for session and frequently accessed data
- Browser caching for static assets
- API response caching for lesson content
- Database query result caching

### Resource Management
- Container resource limits and monitoring
- Automatic scaling based on demand
- Efficient cleanup of expired lab instances
- Optimized database indexing and queries
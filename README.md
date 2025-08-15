# 📱 Advanced Mobile Task Manager

A modern React Native task management application built with Expo, featuring authentication, real-time updates, and a beautiful UI powered by NativeWind (Tailwind CSS).

## ✨ Features

- 🔐 **Authentication System** - Firebase Auth integration
- 📋 **Task Management** - Create, edit, delete, and organize tasks
- 🎨 **Modern UI** - NativeWind styling with responsive design
- 📱 **Cross-Platform** - Runs on iOS, Android, and Web
- 🔔 **Notifications** - Task reminders and updates
- 👤 **User Profiles** - Customizable user settings
- 🌙 **Dark Mode** - Theme switching support

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Expo CLI
- Git
- Android Studio / Xcode (for device testing)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ChamathDilshanC/Advanced-Mobile-Development.git
   cd Advanced-Mobile-Development
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env file in root directory
   cp .env.example .env
   ```

4. **Configure Firebase** (See Firebase Setup section below)

5. **Start the development server**

   ```bash
   npx expo start
   ```

6. **Run on your preferred platform**
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Press `w` for web browser
   - Scan QR code with Expo Go app for physical device

## 🔥 Firebase Setup

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Follow the setup wizard

### 2. Enable Authentication

1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Enable **Email/Password** provider
3. Enable **Google** provider (optional)

### 3. Create Web App

1. Go to **Project Settings** > **General**
2. Click "Add app" and select **Web**
3. Register your app with a nickname
4. Copy the Firebase config object

### 4. Update Firebase Configuration

Replace the config in `firebase.ts` with your Firebase project details:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};
```

### 5. Update Environment Variables

Add your API endpoints to `.env`:

```env
API_BASE_URL="your-api-base-url"
EXPO_PUBLIC_API_BASE_URL="your-public-api-url"
```

## 📁 Project Structure

```
├── app/                    # Main application routes
│   ├── (auth)/            # Authentication screens
│   │   ├── login.tsx      # Login screen
│   │   └── register.tsx   # Registration screen
│   ├── (dashboard)/       # Main app screens
│   │   ├── dashboard.tsx  # Dashboard/Home
│   │   ├── tasks.tsx      # Task management
│   │   ├── profile.tsx    # User profile
│   │   └── settings.tsx   # App settings
│   └── _layout.tsx        # Root layout
├── assets/                # Static assets
├── context/               # React contexts
│   └── AuthContext.tsx    # Authentication context
├── services/              # API services
│   ├── authService.ts     # Authentication API
│   ├── taskService.ts     # Task management API
│   └── config/
│       └── api.ts         # API configuration
├── firebase.ts            # Firebase configuration
└── global.css            # Global styles
```

## 🛠️ Available Scripts

```bash
# Development
npm start              # Start Expo development server
npm run android        # Run on Android
npm run ios            # Run on iOS
npm run web            # Run on web

# Building
npm run build          # Build for production
npm run build:android  # Build Android APK
npm run build:ios      # Build iOS app

# Code Quality
npm run lint           # Run ESLint
npm run lint:fix       # Fix ESLint issues
npm run type-check     # TypeScript type checking
```

## 🎨 Styling

This project uses **NativeWind** (Tailwind CSS for React Native) for styling:

- Configure styles in `tailwind.config.js`
- Global styles in `global.css`
- Component-level utility classes
- Dark mode support

## 📱 Testing

### Development Testing

- **Expo Go**: Scan QR code for quick testing
- **Development Build**: For production-like testing
- **Emulators**: Android Studio/Xcode simulators

### Device Testing

```bash
# Generate development build
npx expo run:android --device
npx expo run:ios --device
```

## 🔧 Configuration Files

- **`app.json`** - Expo app configuration
- **`babel.config.js`** - Babel transpiler config
- **`metro.config.js`** - Metro bundler config
- **`tailwind.config.js`** - Tailwind CSS config
- **`tsconfig.json`** - TypeScript configuration

## 📋 TODOs

### Firebase Setup

- [ ] Add your Firebase project configuration to `firebase.ts`
- [ ] Configure Firebase Authentication providers
- [ ] Set up Firestore database rules
- [ ] Configure Firebase Cloud Messaging (FCM) for push notifications
- [ ] Set up Firebase Storage for file uploads

### Feature Development

- [ ] Implement task categories and tags
- [ ] Add task priority levels
- [ ] Create task sharing functionality
- [ ] Implement offline sync
- [ ] Add task statistics and analytics
- [ ] Create export/import functionality
- [ ] Implement team collaboration features

### UI/UX Improvements

- [ ] Add animations and transitions
- [ ] Implement gesture controls
- [ ] Create onboarding flow
- [ ] Add accessibility features
- [ ] Optimize for tablet layouts
- [ ] Create custom icon set

### Performance & Quality

- [ ] Add unit and integration tests
- [ ] Implement error boundary components
- [ ] Add performance monitoring
- [ ] Optimize bundle size
- [ ] Add CI/CD pipeline
- [ ] Implement analytics tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/ChamathDilshanC/Advanced-Mobile-Development/issues) page
2. Create a new issue with detailed description
3. Join our [Discord community](https://discord.gg/your-discord)

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

**Built with ❤️ by [ChamathDilshanC](https://github.com/ChamathDilshanC)**

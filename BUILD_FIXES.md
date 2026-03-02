# Build Configuration Fixes

## Issues Fixed

### 1. Deprecated Configuration Warnings
- **Issue**: `source.alias` config is deprecated
- **Fix**: Moved alias configuration from `source.alias` to `resolve.alias`

- **Issue**: Invalid `devServer` config in Rspack
- **Fix**: Moved `devServer.client` configuration to `dev.client`

### 2. JavaScript Parse Errors in External CDN Files
- **Issue**: Chunk minification failed for external CDN files
- **Files Affected**:
  - `app.deriv.me/cdn.rudderlabs.com/3.14.0/modern/plugins/rsa-plugins.js` (contained "No Content")
  - `app.deriv.me/js.intercomcdn.com/app-modern.b18af3d6.js` (invalid syntax: `n ? ? !1`)

- **Fix**: 
  - Deleted problematic files
  - Added exclusion rules in `rsbuild.config.ts` to ignore CDN files during build
  - Added webpack rules to treat CDN files as assets instead of processing them

### 3. Configuration Changes Made

#### rsbuild.config.ts Updates:
```typescript
// Moved from source.alias to resolve.alias
resolve: {
    alias: {
        // ... alias configurations
    },
},

// Moved devServer config to dev section
dev: {
    hmr: true,
    liveReload: true,
    client: {
        webSocketURL: 'auto://0.0.0.0:0/ws',
    },
},

// Added exclusions for problematic files
output: {
    copy: [
        {
            from: path.join(__dirname, 'public'),
            globOptions: {
                ignore: [
                    '**/cdn.rudderlabs.com/**/*',
                    '**/js.intercomcdn.com/**/*',
                    '**/*rsa-plugins.js',
                    '**/*app-modern.*.js'
                ],
            },
        },
    ],
},

// Added rules to handle CDN files as assets
tools: {
    rspack: {
        module: {
            rules: [
                {
                    test: /\/(cdn\.rudderlabs\.com|js\.intercomcdn\.com)\/.*\.js$/,
                    type: 'asset/resource',
                    generator: {
                        filename: '[path][name][ext]',
                    },
                },
            ],
        },
    },
},
```

### 4. Files Removed
- `public/app.deriv.me/cdn.rudderlabs.com/3.14.0/modern/plugins/rsa-plugins.js`
- `public/app.deriv.me/js.intercomcdn.com/app-modern.b18af3d6.js`

## Expected Results
- No more deprecation warnings for `source.alias` and `devServer`
- No more JavaScript parse errors during build
- External CDN files are properly handled as assets
- Build should complete successfully

## Testing
Run the build command to verify fixes:
```bash
npm run build
# or
yarn build
```
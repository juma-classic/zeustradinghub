# Strategy Monitor Tab Added

## Overview

Added a new **"Strategy Monitor"** tab right after the Strategy Builder tab. This tab displays the same Condition Dashboard (Auto Strategy page) for monitoring and managing strategies.

## Changes Made

### 1. **New Tab Constants**
Updated `src/constants/bot-contents.ts`:
- Added `STRATEGY_MONITOR: 3` to `DBOT_TABS`
- Shifted all subsequent tab indices by 1
- Added `'id-strategy-monitor'` to `TAB_IDS` array

### 2. **New Icon Component**
Created `StrategyMonitorIcon` in `src/pages/main/main.tsx`:
- Monitor s
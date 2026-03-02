# Strategy Builder User Flow

## What Happens When You Click "Create Strategy"

### **Step-by-Step Flow:**

#### **1. Validation** ✅
The system validates your strategy:
- Strategy name is required
- At least one trading symbol is required
- At least one condition is required
- Bot selection is required
- Stake amount must be positive
- Cooldown period must be 0-3600 seconds

If validation fails:
- ❌ Error messages are displayed
- Strategy is NOT created
- User stays on Strategy Builder page

#### **2. Strategy Creation** 💾
If validation passes:
- Strategy data is prepared with all settings
- Strategy is saved to localStorage
- Unique strategy ID is generated
- Alert configuration is saved (if configured)
- Strategy is created in "inactive" state

#### **3. Automatic Navigation** 🎯
After successful creation:
- User is automatically redirected to **Auto Strategy (Condition Dashboard)** tab
- This is where you can see and manage your strategies

#### **4. Strategy Appears in Dashboard** 📊
On the Condition Dashboard, you'll see:
- Your newly created strategy in the strategy list
- Strategy status: **Inactive** (not monitoring yet)
- All configured conditions
- Bot action details
- Profit/loss limits

#### **5. Next Steps for User** 👤
From the Condition Dashboard, you can:
- **Activate** the strategy to start monitoring conditions
- **Edit** the strategy (goes back to Strategy Builder)
- **Delete** the strategy
- **View** real-time condition status
- **Monitor** when the strategy triggers

---

## Visual Flow Diagram:

```
Strategy Builder Page
        ↓
[Create Strategy Button]
        ↓
    Validation
        ↓
   ✅ Valid?
        ↓
  Save to Storage
        ↓
Auto-Navigate to Dashboard
        ↓
Strategy Appears (Inactive)
        ↓
User Clicks "Activate"
        ↓
Strategy Starts Monitoring
        ↓
Conditions Evaluated
        ↓
When Conditions Met → Bot Starts!
```

---

## Cancel Button Behavior:

When you click **Cancel**:
- No strategy is created
- User is redirected to Auto Strategy (Condition Dashboard) tab
- Any unsaved changes are lost

---

## Implementation Details:

### **onSave Callback:**
```tsx
onSave={(strategyId) => {
    console.log('Strategy created:', strategyId);
    // Switch to Auto Strategy (Condition Dashboard) tab
    setActiveTab(DBOT_TABS.AUTO_STRATEGY);
    // TODO: Show success notification
}}
```

### **onCancel Callback:**
```tsx
onCancel={() => {
    // Switch back to Auto Strategy tab
    setActiveTab(DBOT_TABS.AUTO_STRATEGY);
}}
```

---

## Tab Navigation:

The system uses tab indices to navigate:
- **DBOT_TABS.STRATEGY_BUILDER** (Index 2) - Where you create strategies
- **DBOT_TABS.AUTO_STRATEGY** (Index 1) - Where you manage and monitor strategies

---

## Future Enhancements (TODO):

1. **Success Notification** 🎉
   - Show toast/notification: "Strategy created successfully!"
   - Display strategy name in notification
   - Auto-dismiss after 3 seconds

2. **Highlight New Strategy** ✨
   - Scroll to the new strategy in the list
   - Briefly highlight it with animation
   - Draw user's attention to the new item

3. **Quick Activate Prompt** ⚡
   - Show dialog: "Strategy created! Activate now?"
   - Buttons: "Activate" or "Later"
   - One-click activation after creation

4. **Strategy Summary** 📋
   - Show quick summary of created strategy
   - Confirm all settings before closing
   - "View Details" button

---

## User Experience Goals:

✅ **Clear Feedback**: User knows strategy was created successfully
✅ **Logical Flow**: Automatically go to where you manage strategies
✅ **Quick Access**: Easy to activate the new strategy
✅ **No Confusion**: Clear next steps for the user
✅ **Efficient**: Minimal clicks to get strategy running

---

## Files Modified:

- `src/pages/main/main.tsx` - Added onSave and onCancel callbacks
- `src/components/auto-strategy/StrategyBuilder.tsx` - Handles save logic

---

## Testing Checklist:

- [ ] Create strategy with valid data → Should navigate to dashboard
- [ ] Create strategy with invalid data → Should show errors, stay on page
- [ ] Click Cancel → Should navigate to dashboard without saving
- [ ] Created strategy appears in dashboard list
- [ ] Strategy is initially inactive
- [ ] Can activate strategy from dashboard
- [ ] Strategy ID is logged to console

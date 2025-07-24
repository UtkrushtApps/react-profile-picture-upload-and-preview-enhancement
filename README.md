# Task Overview
Enhance the profile picture upload feature in a React profile settings page. The current ProfilePicture component only displays a static avatar and does not let users upload or preview a profile image before saving.

## Guidance
- Adopt accessible React patterns for file input and image preview controls.
- Implement robust client-side file type validation.
- Provide clear feedback and accessible error messages for users selecting unsupported files.
- Ensure that the image preview updates instantly after image selection.
- Properly manage memory by releasing any created object URLs when they are no longer needed.
- Use only React (with hooks) and native browser APIs as specified.

## Objectives
- Allow users to select a new image file for profile pictures and see an immediate preview.
- Validate selected files against allowed image types.
- Display error feedback on invalid image file selections.
- Manage browser memory by cleaning up any used resources (object URLs).
- Ensure all interactive elements are accessible to screen readers and keyboard navigation.

## How to Verify
Check that image upload is accessible, previews update immediately, unsupported files trigger error feedback, and browser memory is managed effectively after multiple preview updates.
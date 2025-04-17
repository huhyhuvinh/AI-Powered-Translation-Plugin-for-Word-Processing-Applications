# AI-Powered-Translation-Plugin-for-Word-Processing-Applications

## Student Information
- **Student name**: Quách Trần Quán Vinh
- **Student ID**: 22127460

## Introduction

This add-on integrates an AI-powered translation tool into Google Docs, enabling users to translate selected text or entire documents directly within the Google Docs interface. It uses the Gemini API for high-quality, context-aware translations and provides a user-friendly sidebar for seamless interaction.

## Features
- **Multi-Language Support**: Translate text between numerous languages with source language auto-detection.
- **Real-Time Translation**: Instantly translate selected text or the entire document.
- **Customizable Settings**: Adjust translation intensity (temperature) for more creative or precise outputs.
- **Intuitive Sidebar Interface**: Access translation options without leaving the document.
- **Cross-Platform**: Designed for Google Docs, with potential for expansion to other platforms.

## Prerequisites
- A Google account with access to Google Docs.
- A Gemini API key (obtainable from [Google's API Console](https://makersuite.google.com/app/apikey)).
- Basic familiarity with Google Apps Script and Google Workspace Add-ons.

## Setup and Deployment

### Step 1: Create a New Google Apps Script Project
1. Open Google Docs.
2. Navigate to `Extensions > Apps Script`.
3. Create a new project or open an existing one.
4. Replace the default `Code.gs` file with the provided `code.gs`.
5. Create a new file named `sidebar.html` and paste the provided `sidebar.html` content.
6. Save both files.

### Step 2: Configure the Gemini API Key
1. In the Apps Script editor, go to `Project Settings`.
2. Under `Script Properties`, add a new property:
   - **Key**: `API_KEY`
   - **Value**: Your Gemini API key
3. Save the property.

### Step 3: Deploy the Add-on
1. In the Apps Script editor, click `Deploy > New Deployment`.
2. Select `Add-on` as the deployment type.
3. Configure the deployment:
   - Set the deployment name (e.g., "AI Translation Add-on").
   - Choose `Anyone` for access (or restrict to your organization if needed).
4. Click `Deploy`.
5. Note the deployment ID for later use.

### Step 4: Test the Add-on
1. Open a Google Doc.
2. Go to `Extensions > Add-ons > Manage Add-ons`.
3. Search for your add-on by name or deployment ID and install it.
4. Refresh the Google Doc. You should see a new menu item, `AI Translation`.

### Step 5: Publish to Google Workspace Marketplace (Optional)
1. In the Apps Script editor, click `Deploy > Publish to Google Workspace Marketplace`.
2. Follow the prompts to create a listing, including:
   - Add-on name, description, and logo.
   - Screenshots and OAuth scopes.
   - Developer and support contact information.
3. Submit the add-on for review. Once approved, it can be shared publicly or within your organization.

## Usage Instructions

1. **Open the Add-on**:
   - In Google Docs, click `Extensions > AI Translation > Open Translation Sidebar`.
   - A sidebar will appear on the right side of the document.

2. **Configure Translation Settings**:
   - **Source Language**: Select the input language or choose `Auto-detect`.
   - **Target Language**: Choose the desired output language (defaults to English).
   - **Temperature**: Adjust the slider (0 to 1) to control translation creativity (0 for precise, 1 for more creative).
   - **Translate Whole Document**: Check the box to translate the entire document, or leave unchecked to translate only selected text.

3. **Translate Text**:
   - Highlight the text you want to translate (or none if translating the whole document).
   - Click the `Translate Selected Text` button in the sidebar.
   - The translated text will appear in a pop-up alert.

4. **Review Output**:
   - For single words or short phrases, the translation is displayed directly.
   - For multiple selections or documents, translations are labeled with their identification for clarity.


# Nodemailer

This guide provides step-by-step instructions for setting up and using Nodemailer in a Node.js application with OAuth2 authentication using `ClientID` and `ClientSecret`, along with generating a refresh token using the OAuth 2.0 Playground.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A Google account to generate OAuth2 credentials (ClientID and ClientSecret).
- Access to the [Google API Console](https://console.developers.google.com/) to create OAuth2 credentials.

## Getting OAuth2 Credentials

1. **Go to the Google API Console:**
   - Navigate to the [Google API Console](https://console.developers.google.com/).
   - Create a new project or select an existing one.

2. **Enable Gmail API:**
   - Go to the **Library** section.
   - Search for **Gmail API** and enable it.

3. **OAuth Consent Screen**
   - Go on OAuth Consent Screen
   - Click on Get Started
   - Add project name
   - Support Email - Add Email
   - Audience - Choose External - Next
   - Add Email
   - Continue
   - Click on Top-Left and Go to APIs and Services

4. **Create OAuth2 Credentials:**
   - Go to the **Credentials** section.
   - Click on **Create Credentials** and choose **OAuth 2.0 Client IDs**.
   - Set the application type to **Web application**.
   - Under **Authorized redirect URIs**, add `http://localhost` and `https://developers.google.com/oauthplayground` (or your application’s URL).
   - After creating, you'll get your **ClientID** and **ClientSecret**.

## Generating the Refresh Token Using OAuth 2.0 Playground

1. **Access OAuth 2.0 Playground:**
   - Open the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground) in your web browser.

2. **Configure OAuth 2.0 Playground:**
   - In the top-right corner, click on the gear icon (settings).
   - Under **OAuth 2.0 endpoints**, select `Use your own OAuth credentials`.
   - Enter your `ClientID` and `ClientSecret` obtained from the Google Cloud Console.
   - Set the **Access type** to `Offline` to obtain a refresh token.

3. **Select Scopes:**
   - In Step 1 on the left panel, select the appropriate scopes for your application. For Gmail, choose:
     ```
     https://mail.google.com/
     ```

4. **Authorize APIs:**
   - Click on **Authorize APIs**. You’ll be redirected to a Google login page to authorize the application. but Before Follow the Process which is on Number 5

5. **Important Process**
   - Again come to [Google API Console](https://console.developers.google.com/).
   - Click on credentials - Select Name (OAuth Client ID Name Which you Created).
   - After Selecting Name - Select Audience (Left Menu Bar).
   - Add Test User - Add Email.
   - Important - Test User Mail and Google Login Page Mail should be same.
   - Read and then give Permission Accordingly

6. **Exchange Authorization Code for Tokens:**
   - After authorizing, you'll be redirected back to the OAuth Playground.
   - Click on **Exchange authorization code for tokens**. This will generate an `access token` and a `refresh token`.

7. **Copy Refresh Token:**
   - Your `refresh token` will appear under the response for Step 2. Copy it and use it in your `.env` file.

# Installation

**Install Nodemailer:**

   ```bash
   npm install nodemailer
   ```

**Notes**
 
- Simple Mail Transfer Protocol (SMTP) is the standard internet protocol used for sending and relaying outgoing emails between servers
- Transporter help to communicate between Web Server and SMTP Server

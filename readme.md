GPT Blockchain Manager Terminal

To get this project up and running, follow the steps below:

## Installation
1. Make sure Docker is installed on your computer

## Cloning the project
2. Clone the project by running the following command in your terminal:
  * git clone https://github.com/Sexercise/gpt-blockchain-manager

## Creating a Super Token account
3. Access the Super Token dashboard via this link https://supertokens.com/dashboard-saas
4. Remember to save your Core connectionURI and Core API key

## Setting up Social Credentials
We utilize Google and Github in this project, but Super Token documentation provides guidance for other options. The following links contain step-by-step processes:
  * Google : https://support.google.com/workspacemigrate/answer/9222992?hl=en
  * Github :  https://docs.github.com/en/apps/creating-github-apps/creating-github-apps/creating-a-github-app

## Modifying environment files
3. Navigate to backend/auth, create a .env file and set the following values:
  * URI=  /* Your saved Core connectionURI */
  * KEY= /* Your saved Core API key */
  * CLIENT_ID= /* Google Client ID */
  * CLIENT_SECRET=/* Google Client Secret*/
  * GITHUB_CLIENT= /* Github Client */
  * GITHUB_SECRET= /* Github Secret */ 
4. Now, go to backend/blockchain_gpt, create a .env
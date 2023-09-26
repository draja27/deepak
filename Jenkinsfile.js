pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git
                git credentialsId: 'your-git-credentials', url: 'https://github.com/draja27/deepak.git'
            }
        }

        
        }
    }


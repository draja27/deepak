pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                dir('/var/lib/jenkins/workspace/pipe') {
                    // Run Git commands here
                    sh 'git fetch --tags --progress https://github.com/draja27/deepak.git +refs/heads/*:refs/remotes/origin/*'
                }
            }
        }
        // Add more stages as needed
    }
}

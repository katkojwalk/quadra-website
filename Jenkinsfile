pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t quadra-website .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop quadra-website || true
                docker rm quadra-website || true

                docker run -d \
                  --name quadra-website \
                  -p 8081:80 \
                  quadra-website
                '''
            }
        }

        stage('Verify') {
            steps {
                sh 'curl http://localhost:8081'
            }
        }
    }
}


pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/katkojwalk/quadra-website.git'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(credentials: ['ec2-key']) {
                    sh '''
                        scp -o StrictHostKeyChecking=no -r ./* ec2-user@16.112.110.38:/tmp/website/

                        ssh -o StrictHostKeyChecking=no ec2-user@16.112.110.38 << EOF
                        sudo mkdir -p /usr/share/nginx/html
                        sudo rm -rf /usr/share/nginx/html/*
                        sudo cp -r /tmp/website/* /usr/share/nginx/html/
                        sudo systemctl restart nginx
                        EOF
                    '''
                }
            }
        }
    }
}

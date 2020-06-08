eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa &&

source ~/.profile
echo "$DOCKER_PASSWORD" | docker login --username $DOCKER_USERNAME --password-stdin
sudo docker stop bridestorydemofe
sudo docker rm bridestorydemofe
sudo docker rmi roslianiwp/bridestory_fe:latest
sudo docker run -d --name bridestorydemofe -p 8443:80 roslianiwp/bridestory_fe:latest

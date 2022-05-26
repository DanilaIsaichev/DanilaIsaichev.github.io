---
title: "Настройка подключения к виртуальной частной сети"
weight: 6

task_code: "vpn"
task_title: "Настройка подключения к виртуальной частной сети"
subject: "Прикладные Информационные Технологии"
---

## Команды для настройки сервера:
```
sudo apt update && sudo apt upgrade -y
 
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
 
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg
--dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
 
echo \
  "deb [arch=$(dpkg
--print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg]
https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable"
| sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
 
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
docker-compose-plugin
 
docker run -t -i -p 8080:8080 --volumes-from $CID umputun/dockvpn
serveconfig
```
---

## Результат:
![VPN1](/pit/vpn/VPN1.png)  
![VPN2](/pit/vpn/VPN2.png)  
![VPN3](/pit/vpn/VPN3.png)  
![VPN4](/pit/vpn/VPN4.png)  
FROM node:12-alpine
 WORKDIR /app
 COPY . .
 RUN npm install --production
 CMD ["node", "src/index.js"]


[09/03 16:01] Evandro Ignácio
    
C:\opt\EAP-6.4.0\bin\standalone.bat --debug 8989
​[09/03 16:01] Evandro Ignácio
    
C:\opt\jboss-as-7.1.1.Final-Novo\bin\standalone.bat -Djboss.bind.address.management=localhost -Dinfra.Ambiente=dsp -Dinfra.email.Estrategia=ESBWSSoap

mvn -Dhttps.protocols=TLSv1.2 install
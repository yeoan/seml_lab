FROM node:9-slim
WORKDIR /workspace
COPY package.json /workspace
RUN npm install
COPY . /workspace
CMD ["npm","start"]

build:
	docker-compose up -d --build
up:
	docker-compose up -d
ps:
	docker-compose ps
down:
	docker-compose down
work:
	docker exec -it node-app bash
test:
	docker exec node-app yarn test
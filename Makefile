.PHONY: all build

build:
	npm run build

deploy: build
	aws s3 sync ./build s3://alicanakyuz.tech --delete --profile alican
	aws cloudfront create-invalidation --distribution-id E2VGURX5IAYLO2 --paths "/*" --profile alican
	aws cloudfront create-invalidation --distribution-id E2VGURX5IAYLO2 --paths "/" --profile alican

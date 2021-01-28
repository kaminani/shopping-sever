-- 进入数据库
USE shopping;
-- DROP TABLE product;
-- 创建用户数据表
CREATE TABLE product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(128),
	subtitle VARCHAR(128),
	price DECIMAL(10,2),
	spec VARCHAR(64),
	pname VARCHAR(32),
	category VARCHAR(32),
	img VARCHAR(1024),
	shelf_time BIGINT,
	sold_count INT,
	is_onsale BOOL
);
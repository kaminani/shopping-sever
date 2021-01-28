-- 进入数据库
USE shopping;
-- DROP TABLE category;
-- 创建种类表
CREATE TABLE category(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	category_name VARCHAR(32)
);
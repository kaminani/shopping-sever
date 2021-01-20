-- 进入数据库
USE shopping;
-- 创建用户数据表
CREATE TABLE user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(16) UNIQUE,
	avatar VARCHAR(128),
	user_name VARCHAR(32),
	gender BOOL
);
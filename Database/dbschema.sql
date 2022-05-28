CREATE TABLE leaderboard (
    id SERIAL PRIMARY KEY, 
    user_id VARCHAR(20) NOT NULL,
    username VARCHAR(40) NOT NULL,
    guild_id VARCHAR(20) DEFAULT NULL, 
    num_tax_pay INTEGER NOT NULL DEFAULT 0
)

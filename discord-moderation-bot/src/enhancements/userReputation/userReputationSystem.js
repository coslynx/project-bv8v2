import sqlite3

class UserReputationSystem:
    def __init__(self, db_file):
        self.conn = sqlite3.connect(db_file)
        self.cursor = self.conn.cursor()
        self.create_table()

    def create_table(self):
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS user_reputation (
                                user_id TEXT PRIMARY KEY,
                                reputation INTEGER
                                )''')
        self.conn.commit()

    def get_user_reputation(self, user_id):
        self.cursor.execute('''SELECT reputation FROM user_reputation WHERE user_id = ?''', (user_id,))
        reputation = self.cursor.fetchone()
        if reputation:
            return reputation[0]
        else:
            return None

    def update_user_reputation(self, user_id, reputation_change):
        current_reputation = self.get_user_reputation(user_id)
        if current_reputation is not None:
            new_reputation = current_reputation + reputation_change
            self.cursor.execute('''UPDATE user_reputation SET reputation = ? WHERE user_id = ?''', (new_reputation, user_id))
        else:
            self.cursor.execute('''INSERT INTO user_reputation (user_id, reputation) VALUES (?, ?)''', (user_id, reputation_change))
        self.conn.commit()

    def reset_user_reputation(self, user_id):
        self.cursor.execute('''DELETE FROM user_reputation WHERE user_id = ?''', (user_id,))
        self.conn.commit()

    def close_connection(self):
        self.conn.close()
const documentationTutorials = {
  createTutorial: (title, content) => {
    return `Tutorial: ${title}\n${content}`;
  },
  updateTutorial: (title, newContent) => {
    return `Tutorial "${title}" has been updated.\n${newContent}`;
  },
  deleteTutorial: (title) => {
    return `Tutorial "${title}" has been deleted.`;
  }
};

module.exports = documentationTutorials;
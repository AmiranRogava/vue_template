const urlTools = {

    urlFix(str) {
      return str
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/[\s-]+/g, '-')
        .replace(/-+/g, '-');
    }

};

export default urlTools;

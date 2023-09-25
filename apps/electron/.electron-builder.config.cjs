module.exports = async function () {
  const getVersion = process.env.npm_package_version;

  return {
    directories: {
      output: 'dist',
      buildResources: 'build-resources',
    },
    files: ['layers/**/dist/**'],
    extraMetadata: {
      version: getVersion,
    },

    // Specify linux target just for disabling snap compilation
    linux: {
      target: 'deb',
    },
  };
};

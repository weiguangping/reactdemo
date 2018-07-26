export default function(projectPath) {
  return {
    includePaths: [projectPath('src/'), projectPath('node_modules/')],
    sourceMap: true
  };
}

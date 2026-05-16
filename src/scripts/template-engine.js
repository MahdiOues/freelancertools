function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fill(template, data) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => data[key] ?? '');
}

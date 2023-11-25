let a = 10;

try {
  a = b + 10;
} catch (error) {
  console.log("error:", error);
} finally {
  console.log("code is exeucted");
}

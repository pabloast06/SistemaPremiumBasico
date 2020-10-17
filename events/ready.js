module.exports = async (client) => {
  console.log(`[API] Loggeado como ${client.user.username}`);
  await client.user.setActivity("io que se", {
    type: "WATCHING",
    status: "idle",
  });
};

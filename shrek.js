export default {
  goosemodHandlers: {
    onImport: () => {
        var ID = goosemod.webpackModules.findByProps('getCurrentUser').getCurrentUser().id
        goosemod.patcher.userBadges.patch('Shrek', 'https://i.imgur.com/d71h5LO.png', () => [ID], () => {}, { round: true })
      },
      onRemove: () => {
        console.log("this modules kinda does nothing upon removing it so here's some text in console instead")
      },
    },
  };

Ext.define("BABYSTYLE.view.Main", {
    extend: 'Ext.Panel',
    xtype: 'main',
   
    config: {
        tabBarPosition: 'bottom',
        layout:'card',

        items: [
            {
            	xtype: 'homepanel'
            },
            {
            	xtype: 'photopanel'
            },
            {
            	xtype: 'stylecontest'
            },
            {
            	xtype: 'styleshop'
            },
            {
            	xtype: 'setting'
            },
            {
            	xtype: 'contactform'
            }
        ]
    }
});

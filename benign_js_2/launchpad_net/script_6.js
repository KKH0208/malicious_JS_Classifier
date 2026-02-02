/* 元のURL: https://launchpad.net */

        //<![CDATA[
        LPJS.use('base', 'node', 'console', 'event',
            'oop', 'lp', 'lp.app.foldables','lp.app.sorttable',
            'lp.app.inlinehelp', 'lp.app.links',
            'lp.bugs.bugtask_index', 'lp.bugs.subscribers',
            'lp.app.ellipsis', 'lp.code.branchmergeproposal.diff',
            'lp.views.global',
             function(Y) {

            Y.on("domready", function () {
                var global_view = new Y.lp.views.Global();
                global_view.render();

                Y.lp.app.sorttable.SortTable.init();
                Y.lp.app.inlinehelp.init_help();
                Y.lp.activate_collapsibles();
                Y.lp.app.foldables.activate();
                Y.lp.app.links.check_valid_lp_links();
            });

            Y.on('lp:context:web_link:changed', function(e) {
                  window.location = e.new_value;
            });
        });
        //]]>
    


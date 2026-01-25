/* 元のURL: https://sourceforge.net */

            /*global unescape, window, SF*/
            // Setup our namespace
            if (!window.SF) { window.SF = {}; }
            if (!window.net) { window.net = {}; }
            if (!window.net.sf) { window.net.sf = {}; }
            SF.Ads = {};
            SF.cdn = '//a.fsdn.com/con';
            SF.alluracdn = '//a.fsdn.com/allura/cdn/allura/nf';
            SF.deploy_time = '1761597013';
            SF.sandiego = true;
            SF.sandiego_chrome = true;
            SF.variant = 'sf';
            SF.fpid = '85a8e1e0-276f-4b56-acd3-1e198fab0fc8';
            SF.billboard_route = '/software/product/$slug/';
            
            SF.Breakpoints = {
              small: 0,
              medium: 640,
              leaderboard: 743,
              billboard: 985,
              large: 1053,
              xlarge: 1295,
              xxlarge: 1366
            };
            SF.initial_breakpoints_visible = {};
            for (var bp in SF.Breakpoints) {
                if (!SF.Breakpoints.hasOwnProperty(bp)) {
                    continue;
                }
                SF.initial_breakpoints_visible[bp] = !window.matchMedia || window.matchMedia('(min-width: ' + SF.Breakpoints[bp] + 'px)').matches;
            }
            
        


function SetImageStatus(imageIndex, status)
    {
        
        if (imageStatusArray[imageIndex] === 0)
        {
            
            imageStatusArray[imageIndex] = status;
        }

        TryCompleteSignout();
    }

    function ImageTimeout()
    {
        imageStatusTimeout = true;
        TryCompleteSignout();
    }

    function IframeTimeout()
    {
        iframeStatusTimeout = true;
        TryCompleteSignout();
    }

    function MsaTimeout()
    {
        msaSignoutStatus = 3;
        TryCompleteSignout();
    }

    
    function TryCompleteSignout()
    {
        var signoutComplete = true;


            
            if (iframeStatusTimeout !== true)
            {
                signoutComplete = false;
            }
            


        if (signoutComplete)
        {
            CompleteSignout();
        }
    }

    function CompleteSignout()
    {
        var statusSuccess = true;

        

            CompleteSignoutRender(statusSuccess);
    }

    function CompleteSignoutRender(signoutSuccessful)
    {
        signoutSuccessful = signoutSuccessful && true;

        
            
            
            if (!signoutSuccessful)
            {
                    
                    RenderSignoutFailure();
                    
            }
            else
            {
                RenderSignoutSuccess();

                
                setTimeout('InitiatorRedirect()', 1000);
            }
            
    }

    function RenderSignoutSuccess()
    {
            User.UpdateLogo('', "You signed out of your account", true);

        var signoutStatusMessage = $('#SignOutStatusMessage');
        signoutStatusMessage.text("It\u0027s a good idea to close all browser windows.");
        signoutStatusMessage.show();
    }

    function RenderSignoutFailure()
    {
        
        User.UpdateLogo('', 'Hmm... we\u0027re having trouble signing you out.', true);
        var signoutStatusMessage = $('#SignOutStatusMessage');
        signoutStatusMessage.text("You may still be signed in to some applications. Close your browser to finish signing out.");
        signoutStatusMessage.show();

        
    }

    function WriteSignoutFailedCookie()
    {
        
        document.cookie = "SOS" + "=1; path=/";
    }

    function InitiatorRedirect()
    {
    }
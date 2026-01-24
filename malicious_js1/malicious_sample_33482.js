// returns false when input invalid, returns a number (array index) when url is invalid or // request fails, returns true when complete:

function suSubmitSitemap( $sXmlUrl, $asSearchEnginePingUrl = 'http://www.google.com/ping?sitemap=%s', $bContinueOnError = false ) 
{
  if( !suIsValidString( $sXmlUrl ) || ( !suIsValidString( $asSearchEnginePingUrl ) && !suIsValidArray( $asSearchEnginePingUrl )))
   { return false; }

  $a = (is_array($asSearchEnginePingUrl))?$asSearchEnginePingUrl:explode(',', $asSearchEnginePingUrl );
  $sXmlUrl = urlencode( $sXmlUrl );

  $ret = false;
  foreach( $a as $i=>$sUrl )
  {
    $sUri = str_replace( '%s', $sXmlUrl, $sUrl );
    $bValid = (!is_bool( strpos( $sUrl, '%s' )) && suGetUrlContent( $sUri ));
    if( !$bValid )
     { 
       if( !$bContinueOnError )
        { return $i; }
       if( !is_array( $ret ))
        { $ret = array(); }

       $ret[$i] = $sUri;
     }
  }
  return ret;
}
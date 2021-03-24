# Welcome to AllThingsDnD!

So, you're looking for a simple, straightforward character creator for Dungeons and Dragons, but also want to violate international law by accessing copyrighted materials to which you don't have a license? Well, you've come to the right place! Here at **AllThingsDnD, LLC**, we believe that everyone deserves the opportunity to participate in TTRPGs, that the law is stupid, and that the first "L" in "LLC" stands for "Literally No." Yep, that's right: **AllThingsDnd, Literally No Liability Company**. In case you happen to be a copyright lawyer looking to sue us, here's a quick dragon to distract you.

                                              ,....,.
                                          ..''   .'
                                       .'"       |
                                    .''          \
                                 .''              \.
                               .'                  .".,
                             ,:'             ..,'"'   '...,..::/"".....
                           /'"          .,'"'  .,',:,'""'         .,''
                         ,'.'      .,'"' ..,''' ""         .'   ."'
                       ,'  \, ..,''  .,''. ..,'""        ./   ."
                     ."     .,"  .,'".,"'./           ..''   /
                    ,'    .'  ./'.,"'  .'  "'     ." '.     /
                  .'   ./' ./"."\,..,''     '" ../,     ,  |
                 ,   ./' .'./'|/     ............        ',|
                /   /' ,'.".,'""\..... '""""""""'  .::/'.., |
               /  ." ,' ':\ """  |  ,      ''          '""   \
              /  /'.''. |:::::::""' ,' ' ''. ".,.,  """'    .""
             | ." /.,":. ""..,   "\'.."'..  ;"'  '\.'"""  ."
             | \.:\.    '""./\ \  | ' '" .,"".           /
             / \'   '"..     ", \  \,',     "'..  .,     '
            /.'",''..,  '\,   '\ ". '\'.,     , "'. "'.,|
           .,'        '". ',    \ '.".. ''../'      "" __\
           '             \,',    \  '.'\..,  ","'  .'"
                         |  |    '| ,\""'\/.  |  ."
            ."          .|  .    / / ./'. '.".' /'
            /'        ..|':"""\././  /   "  '/\.'
           //  ./  .'"    /' ./'.' .'  | ..,  ':|
         ./:  ,/   |",   ' ."'  :  '   |    .../:,
        .'.'.\/   /.'           ''  .,   ..\'
      .,\.\".'   /"    ,"' \...,      "\.\| ",
     /    ./""""'   ..:    ',|  "".,     '\  ',
	  .,' "'   \|     "".'".    '/  .| '\.     ", '\
	 /          \.    ../,   "./ '\ |'  \/"" '".'\  \
	/   '\\:.   \,"\::'  ./""'    ./|  .'     .'"/| '|
	' ,"\:"/"""  /'  ."\'  .., |:| .| |'    .'' .\|  ',
	|/  / /'    .'| /  |. \,    /'"/. |  |:\..," .||  \
	'' /.'      //\|'  '\/\:.   :,/"'::.  ,   ..::'|  |
            ||'/,    '\\/"\ '/|    '\ '"::::"| || .
            || \\       "".   ...,  '.  \\...| |' |
            ||  "\,         .".\, ". ', | \  '||  |
             '              |\|'|\/.''\ | |\  ||  |
                            ||\/"/| '\, ., / / /  ,
                             ' \  "   '"  / / .' /
                                '      .'".' .' /
                                  ..'"'.." ." ."
                              .,"":.'""..'" ."
                         .,:'"'"'  .'"  ..'"
                       ." ."'..'""...,"'
                    .." "    , ""'
                   /  . :/"'
                 .'  :/'
                /  /'
               / .'
              / '
             /.'
             '

-----------------------------------------------
Rawr.





# Pages

Below, please find a list of our pages and functions available thereon.

## Register
### /register
On this page, a new user can enroll in AllThingsDnd's services. Passwords must be a minimum of 16 characters with no maximum; all passwords are hashed, salted, and stored on the backend in hashed format to enhance security.  We even allow for duplication of usernames, so long as the password doesn't match as well!

## Login
### /login
On this page, a user can enter their username and password credentials to have them checked against the information stored in the database. Again, the password that they enter is salted using the stored salt associated with their username, hashed, and compared to the password on file. In the event of success, the user is then forwarded on to their home page.

## Home Page
### /
This page provides a quick summary of several pieces of information that may be valuable to a user, including a list of their characters, a report of their current tickets and status, and navbar links to other pages.

## Ticket Creation and Status
### /createticket
### /ticket/:id
The main page with which a user will interact out of these two is the ticket creation page. Though the ticket status page is accessible, it is dependent upon the user knowing the id under which their ticket is stored in the backend, which is unlikely given that that id is never, at any point, reported to them. The ticket creation page consists of a single textbox and a submit button which, when used, will report to the TICKETS table on the backend, storing their complaint forever and ever. And we do mean forever; there is no way for admins to actually address your tickets. We care enough to give you an official way to complain, but not enough to do anything about it. I mean, come on! This service is free ~~*and* technically illegal~~. You can't expect too much of us.

## View Parties You Play With
### /myparties
There's not too much to say about this page: It allows you to see all parties of which you are currently a part.

## Create a New Party
### /createparty
This page will create a new party for others to eventually join. *In all cases, the person who originally creates the party is assumed to be the Dungeon Master, so plan accordingly.* Available fields include campaign name, party name, starting level, maximum group size, location, and weekly meeting time, as well as optional fields for minimum player skill level and a campaign description (maximum of 1024 characters.)

## Party Search
### /partysearch
This page allows you to use any of the criteria listed under Create a New Party to filter all parties currently stored in the database to find a party that works for you!

## Create a New Character
### /createcharacter
This page consists of 20 text entry fields, 2 dropdown selects, and 36 checkboxes, allowing you to lay out all the basic details of how you characters looks, who they are, and what they can do well. The expected formats of the text entry fields are as follows.

| *Field name* | *Data Type* | **Field Name** | **Data Type** | *Field Name* | *Data Type*|
|-------------|---------|-----|-----|-----|-----|
|*Character Name*| *String*|**Background**| **String**|*Flaw*| *String*|
|*Bond*| *String*|**Ideal**| **String**|*Height*| *Floating Point*|
|*Eye Color*| *String*|**Hair Color**| **String**|*Weight*| *Integer*|
|*Age*| *Integer*|**Skin Color**| **String**|*Unique Mark*| *String*|
|*Character Level*| *Integer*|**Max Hitpoints**| **Integer**|*Strength*| *Integer*|
|*Dexterity*| *Integer*|**Constitution**| **Integer**|*Intelligence*| *Integer*|
|*Wisdom*| *Integer*|||*Charisma*| *Integer*|


## Admin Portal
Our Admin Portal, only accessible to those who have had the isAdmin flag manually set to TRUE on our backend, allows admins to view the complete list of patrons, parties, characters, and tickets. Additional functionality, such as a manual add/delete and the ability to actually repsond to tickets is coming... never. We done, suckahs!

-----
You may have noticed that there seems to be some functionality missing, like character equipment, spell lists, or the ability to join a pre-existing party. To this, I say one thing...

# Oh Look! A Dragon!

                                        ,   ,
                                        $,  $,     ,
                                        "ss.$ss. .s'
                                ,     .ss$$$$$$$$$$s,
                                $. s$$$$$$$$$$$$$$`$$Ss
                                "$$$$$$$$$$$$$$$$$$o$$$       ,
                               s$$$$$$$$$$$$$$$$$$$$$$$$s,  ,s
                              s$$$$$$$$$"$$$$$$""""$$$$$$"$$$$$,
                              s$$$$$$$$$$s""$$$$ssssss"$$$$$$$$"
                             s$$$$$$$$$$'         `"""ss"$"$s""
                             s$$$$$$$$$$,              `"""""$  .s$$s
                             s$$$$$$$$$$$$s,...               `s$$'  `
                         `ssss$$$$$$$$$$$$$$$$$$$$####s.     .$$"$.   , s-
                           `""""$$$$$$$$$$$$$$$$$$$$#####$$$$$$"     $.$'
                                 "$$$$$$$$$$$$$$$$$$$$$####s""     .$$$|
                                  "$$$$$$$$$$$$$$$$$$$$$$$$##s    .$$" $
                                   $$""$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"   `
                                  $$"  "$"$$$$$$$$$$$$$$$$$$$$S""""'
                             ,   ,"     '  $$$$$$$$$$$$$$$$####s
                             $.          .s$$$$$$$$$$$$$$$$$####"
                 ,           "$s.   ..ssS$$$$$$$$$$$$$$$$$$$####"
                 $           .$$$S$$$$$$$$$$$$$$$$$$$$$$$$#####"
                 Ss     ..sS$$$$$$$$$$$$$$$$$$$$$$$$$$$######""
                  "$$sS$$$$$$$$$$$$$$$$$$$$$$$$$$$########"
           ,      s$$$$$$$$$$$$$$$$$$$$$$$$#########""'
           $    s$$$$$$$$$$$$$$$$$$$$$#######""'      s'         ,
           $$..$$$$$$$$$$$$$$$$$$######"'       ....,$$....    ,$
            "$$$$$$$$$$$$$$$######"' ,     .sS$$$$$$$$$$$$$$$$s$$
              $$$$$$$$$$$$#####"     $, .s$$$$$$$$$$$$$$$$$$$$$$$$s.
	   )          $$$$$$$$$$$#####'      `$$$$$$$$$###########$$$$$$$$$$$.
	  ((          $$$$$$$$$$$#####       $$$$$$$$###"       "####$$$$$$$$$$
	  ) \         $$$$$$$$$$$$####.     $$$$$$###"             "###$$$$$$$$$   s'
	 (   )        $$$$$$$$$$$$$####.   $$$$$###"                ####$$$$$$$$s$$'
	 )  ( (       $$"$$$$$$$$$$$#####.$$$$$###'                .###$$$$$$$$$$"
	 (  )  )   _,$"   $$$$$$$$$$$$######.$$##'                .###$$$$$$$$$$
	 ) (  ( \.         "$$$$$$$$$$$$$#######,,,.          ..####$$$$$$$$$$$"
	(   )$ )  )        ,$$$$$$$$$$$$$$$$$$####################$$$$$$$$$$$"
	(   ($$  ( \     _sS"  `"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$S$$,
	 )  )$$$s ) )  .      .   `$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"'  `$$
	  (   $$$Ss/  .$,    .$,,s$$$$$$##S$$$$$$$$$$$$$$$$$$$$$$$$S""        '
    \)_$$$$$$$$$$$$$$$$$$$$$$$##"  $$        `$$.        `$$.
        `"S$$$$$$$$$$$$$$$$$#"      $          `$          `$
            `"""""""""""""'         '           '           '

------------------------------------------------

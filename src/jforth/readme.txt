
             Welcome to the JForth PD release
                        6/03/98

                  !!!! IMPORTANT !!!!

    This JForth package is released as freeware.  
    Permission is hereby given for any third party 
    to reproduce, distribute and modify the JForth 
    software code or any derivative works thereof 
    without any compensation or license.  The JForth 
    software code is provided on an "as is" basis 
    without any warranty of any kind, including, 
    without limitation, the implied warranties of 
    merchantability and fitness for a particular 
    purpose and their equivalents under the laws of 
    any jurisdiction, as well as the provision of 
    support of any kind.

    Technical support from Delta Research for this 
    free product is not available.  If, however, you 
    find an error in our release package such as a 
    missing documentation file, or a scrambled 
    archive file, please let us know.

------------------------------------------------------------------
NOTE: JForth PD is distributed in 3 LHA archives named
      J4TH1OF3.LHA, J4TH2OF3.LHA and J4TH3OF3.LHA.  The first 2
      are necessary to install a functional JForth development
      system.  The 3rd contains product documentation in
      RTF format (for use with word processors that understand
      that format) and is highly recommended.
------------------------------------------------------------------
      
    JForth PD is a complete JForth software development system.  
It is equivalent to the last release of the commercial JForth 
Professional 3.1 package, with AmigaDOS 3.1 includes instead of 
2.04 and a few bug fixes.  In addition, a soft copy of the
JForth user manual as well as a much later version of 
Textra, the user-friendly text editor, is included.

    This file will explain how to install the JForth PD software 
development system on your hard drive.  (The enclosed 
documentation mentions running from floppies, but the 
enclosed WB 3.1 include files are too large for that.  Move
them to a separate floppy and reassign ji: there to run from
floppies).

NOTE: Disregard the JForth Pro 3.x installation instructions in 
      the documentation, as well as the Install_JForth 
      installation script in the JTools drawer.  (Both are 
      oriented toward installation from floppies.)  Use the 
      following instructions to install this package...

--------------------------------------------------------------
                    INSTALLATION OVERVIEW

    Hopefully you have already expanded the three J4TH#OF3 lha 
files, because you are looking at this ReadMe.  I recommend the 
lha files be extracted into the same drawer, which can be removed 
after the installation.

    You will then create another drawer and extract the 5 archives 
into it.  You will then perform a small edit to your s:user-startup 
file and finally, reboot your Amiga.  The JForth system will be 
fully functional at that point, ready for you to launch the JForth 
shell (com:JForth) and compile some test programs.

--------------------------------------------------------------
               DETAILED INSTALLATION PROCEDURE

1. Create a drawer somewhere on your hard disk.  For this example, 
   we'll assume the pathname of this drawer is "Work:JF"... you 
   should, of course, substitute your own drawer's pathname when 
   you see "Work:JF" in this example.
   
2. Extract each of the 5 .lha files into Work:JF.  Each will 
   create a drawer with the same name as the respective archive, 
   sans the .lha extension.  When finished, Work:JF should contain 
   the following drawers...
   
        JForth    Extras    JTools    Textra120    JFDocs

3. Add the following 2 lines to your s:user-startup script (if you 
   don't have an s:user-startup file, use s:startup-sequence but 
   insert it before the endcli command)...
   
        assign JFHD: Work:JF
        execute JFHD:Extras/HD-ASSIGNS

4. Save the file, wait 10 seconds, then reboot your Amiga.

5. Launch JForth by one of the following methods...

   From Workbench:      double-click on Work:JF/Extras/com/JForth
   From shell, enter:   run com:jforth

6. After JForth presents it's 'ok' prompt, enter:

       include jd:load_demos

7. When that finishes compiling, enter:
   
       demo

8. To exit JForth, enter:   BYE

   ...then press RETURN

---------------------------------------------------------------------
                   HELPFUL INFO TO GET STARTED

Free dictionary space...

Note:  When com:JForth initially starts up, it has a free dictionary
       space of about 56K.  This is enough to compile the JForth
       demo, but not larger programs.  You can make this area as large
       as your Amiga has memory to support.  As an example, lets
       create a JForth that has 200K free dictionary space...
       
       1. Run the release com:JForth (see step 5 above) and enter:
       
            200 #K !    ( puts 200 in the 'number-K' JForth variable )
            save-forth com:J200    ( creates a bigger JForth on disk )
            bye                       ( exits the com:JForth program )
            
       2. Run the com:J200 program you just created...

          From Workbench:      double-click on Work:JF/Extras/com/J200
          From shell, enter:   run com:J200
          
          Note that the dictionary space at startup is at least 200K.

Note: You can run JForth environments from anywhere... they don't have
      to reside in com:

----------------------------------------------------------------------

JForth logical assignments...

    The 2 startup commands you added to s:user-startup, when executed, 
create some logical assignments for key JForth files.  Some of these
are used internally by the JForth system, others you will use as
you program in JForth, for example, when specifying include files...

   include ji:exec/exec.j
   
These  are some of the most important examples...

   com: holds the released executable JForth binaries.
   
   ji:  holds the JForth include files (which mirror the C include files)
   
   ju:  holds source for many, many useful utilities
   
   jf:  holds most JForth source code in case you want to rebuild
        com:JForth from com:JKernal
        
   cl:  holds source for CLONE, JForth's standalone application generator
        
   jd:  holds many compileable and cloneable demo source files
   
   jrx: holds ARexx support code
   
   ja:  holds the source for some small but handy applications
   
   jo:  holds source to ODE, JForth's object-oriented dialect
   
   mod: holds pre-compiled utilities such as the assembler, disassembler
        which are dynamically loaded as needed
   
   janim: holds animation support code
  
-----------------------------------------------------------------------

How to use CLONE...

To create a cloned standalone application...

1. Compile CLONE by entering:

       include cl:topfile

2. Compile your application

3. Enter the following:

       clone <main>
       
   ...where <main> is the name of your application's main entry point.

4. When that finishes, enter:

       save-image <main> Work:myProgram
       
    ...where <main> is the name of your programs main entry point.
    
    and 'Work:myProgram' is the path/filename of your saved application.
    
    Note: add '-icon' to the end of the save-image command line to have
          a default icon created for your program.
          
5. Enter 'initclone' before performing another clone operation or
   performing a 'save-forth'.

----------------------------------------------------------------------

    JForth provides many standard Forth operators, and a wealth of 
custom ones as well as many sophisticated, state-of-the-art 
features.  It is strongly recommended that you read the 
documentation and have it available to get the most out of JForth.  
There is a LOT in JForth that you will never know about otherwise.

    The provided documentation is the complete JForth user manual, 
with index.

----------------------------------------------------------------------

We hope you enjoy JForth.

Mike Haas and Phil Burk
Creators of JForth



P.S. Don't stop reading yet, because there's a...
   
                JFORTH MAILING LIST AVAILABLE!
                ==============================

   The following is from Martin Randall, a very enthusiastic
   fellow who, at the time of this writing, is doing
   yeoman's work supporting your JForth efforts.  This may
   be the best example... his self-created and 
   self-maintained JForth mailing list.  This can be a real
   boon to JForth users... pooling resources really comes
   in handy!
   
              List instructions from Martin...

To subscribe send mail to MDaemon@ChaosSolutions.com and put 
'Subscribe JForth-List'  as the only line in the body.

To Unsubscribe send mail to MDaemon@ChaosSolutions.com and put 
'Unsubscribe JForth-List'  as the only line in the body.

Any problem send a mail to List-Admin@ChaosSolutions.com

To get a digest as opposed to individual e-mails send to 
MDaemon@ChaosSolutions.com and put  
'SET DIGEST JForth-List'  as the only message in the body.

To change back to individual mails send to 
MDaemon@ChaosSolutions.com and put 'SET NONDIGEST JForth-List'  
as the only message in the body.

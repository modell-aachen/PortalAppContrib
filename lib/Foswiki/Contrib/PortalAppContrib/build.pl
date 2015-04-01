#!/usr/bin/perl -w
use strict;
use warnings;
BEGIN { unshift @INC, split( /:/, $ENV{FOSWIKI_LIBS} ); }

use Foswiki::Contrib::Build;
my $build = new Foswiki::Contrib::Build('PortalAppContrib');
$build->build($build->{target});

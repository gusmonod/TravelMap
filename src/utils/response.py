#!/usr/bin/python3
# -!- encoding:utf8 -!-

# ------------------------------------------------------------------------------------------
#                                    IMPORTS & GLOBALS
# ------------------------------------------------------------------------------------------

import json

# ------------------------------------------------------------------------------------------
#                                     RESPONSE CLASS
# ------------------------------------------------------------------------------------------

class Response:
    def __init__(self, has_error = True, content = {}):
        self.has_error = has_error
        self.content = content

    def json(self):
        return {'has_error': self.has_error, 'content': self.content}

# ------------------------------ TEST ZONE BELOW THIS LINE ---------------------------------

def test():
    pass
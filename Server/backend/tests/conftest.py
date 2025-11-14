# This file serves as a local configuration file for the pytest framework.
# Pytest automatically discovers and executes the code in this file before running tests.
#
# The code below modifies the Python path (`sys.path`) to include the project's root
# directory (the 'backend' directory). This is necessary because the tests are in a
# subdirectory ('tests'), and without this change, Python would not be able to find
# the application modules (like 'controller') that the tests need to import.
#
# By adding the project root to the path, we ensure that imports in our tests
# work the same way they do in the main application, which is crucial for
# creating a reliable and accurate test suite.
import sys
import os

# Add the project root to the Python path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
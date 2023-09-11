import calendar as cl
import pyautogui as pg
import time

yr  = 2024
mm = 1

def show_calendar():
    value = cl.month(yr, mm)
    print(value)

def start_typing():
    time.sleep(3)
    for i in range (500):
        pg.write("i hate you for taking the screenshot")
        pg.press('enter')
    
show_calendar()
start_typing()
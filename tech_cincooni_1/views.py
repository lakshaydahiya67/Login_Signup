from django.http import HttpResponse
from django.shortcuts import render
from .models import hello
def signup(request):
    if request.method == 'POST':
        fullname = request.POST.get('fullname')
        email= request.POST.get('email')
        username = request.POST.get('username')
        password = request.POST.get('password')
        cred1 = hello(username=username, password=password, email=email, fullname=fullname)
        cred1.save()
        return render(request, "login-form.html", {})
    return render(request, "sign-up-page.html", {})
def login(request):
    var1= "Login Successful!!!"
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        cred1 = hello.objects.filter(username=username, password=password)
        if cred1:
            return render(request, "login-form.html", {'var1':var1})
        else:
            return render(request, "login-form.html", {})
    return render(request, "login-form.html", {})
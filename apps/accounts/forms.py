from django import forms
from .models import UserProfile

class ProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['phone', 'address']
        widgets = {
            'phone': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'e.g., +91 9876543210'}),
            'address': forms.Textarea(attrs={'class': 'form-input', 'placeholder': 'e.g., 123 Street Name, City, Country', 'rows': 3}),
        }

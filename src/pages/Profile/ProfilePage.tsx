import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Camera, User, Mail, Calendar, Shield } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  bio: yup.string().max(500, 'Bio must be less than 500 characters'),
});

type FormData = yup.InferType<typeof schema>;

const ProfilePage: React.FC = () => {
  const { user, updateProfile, loading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      bio: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await updateProfile(data);
      setIsEditing(false);
    } catch (error) {
      // Error is handled in the auth context
    }
  };

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Profile</h1>
        <p className="text-secondary">Manage your account information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="bg-bg-secondary border border-border rounded-xl p-6">
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {user?.name?.charAt(0) || 'U'}
                </span>
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            
            <h2 className="text-xl font-bold text-primary mb-1">{user?.name}</h2>
            <p className="text-secondary text-sm mb-4">{user?.email}</p>
            
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Verified Account</span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-secondary">Member since</span>
                <span className="text-primary">
                  {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-secondary">Role</span>
                <span className="text-primary capitalize">{user?.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="lg:col-span-2 bg-bg-secondary border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-primary">Personal Information</h3>
            {!isEditing && (
              <Button variant="outline" onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            )}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                icon={User}
                disabled={!isEditing}
                error={errors.name?.message}
                {...register('name')}
              />
              
              <Input
                label="Email Address"
                type="email"
                icon={Mail}
                disabled={!isEditing}
                error={errors.email?.message}
                {...register('email')}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-1">
                Bio
              </label>
              <textarea
                rows={4}
                disabled={!isEditing}
                className="w-full px-3 py-2 bg-bg-tertiary border border-border rounded-lg text-primary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors disabled:opacity-50"
                placeholder="Tell us about yourself..."
                {...register('bio')}
              />
              {errors.bio && (
                <p className="mt-1 text-sm text-red-500">{errors.bio.message}</p>
              )}
            </div>

            {isEditing && (
              <div className="flex items-center space-x-4">
                <Button type="submit" loading={loading}>
                  Save Changes
                </Button>
                <Button variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Account Stats */}
      <div className="bg-bg-secondary border border-border rounded-xl p-6">
        <h3 className="text-xl font-bold text-primary mb-6">Account Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">25,000</div>
            <div className="text-sm text-secondary">OMK Tokens</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">$2,000</div>
            <div className="text-sm text-secondary">Total Invested</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">$342</div>
            <div className="text-sm text-secondary">Rewards Earned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">180</div>
            <div className="text-sm text-secondary">Days Staking</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
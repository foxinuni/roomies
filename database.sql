-- Create enum types (Supabase compatible)
CREATE TYPE user_roles AS ENUM ('client', 'owner', 'proxy');
CREATE TYPE document_type AS ENUM ('CC', 'DI', 'PASS');
CREATE TYPE housing_state AS ENUM ('published', 'hidden');

-- Users table that extends auth.users
CREATE TABLE public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    username VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    birthday DATE,
    document_type document_type NOT NULL,
    document_value TEXT NOT NULL,
    role user_roles NOT NULL DEFAULT 'client',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Housing table
CREATE TABLE public.housing (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID NOT NULL,
    name VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    description TEXT,
    state housing_state NOT NULL DEFAULT 'published',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (owner_id) REFERENCES public.users(id) ON DELETE CASCADE
);
ALTER TABLE public.housing ENABLE ROW LEVEL SECURITY;

-- Tags table
CREATE TABLE public.tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    value VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;

-- Housing_tag junction table
CREATE TABLE public.housing_tag (
    housing_id UUID NOT NULL,
    tag_id UUID NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (housing_id, tag_id),
    FOREIGN KEY (housing_id) REFERENCES public.housing(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES public.tags(id) ON DELETE CASCADE
);
ALTER TABLE public.housing_tag ENABLE ROW LEVEL SECURITY;

-- Reviews table
CREATE TABLE public.reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    housing_id UUID NOT NULL,
    stars INTEGER NOT NULL CHECK (stars BETWEEN 1 AND 5),
    message TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE,
    FOREIGN KEY (housing_id) REFERENCES public.housing(id) ON DELETE CASCADE
);
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Pictures tables
CREATE TABLE public.housing_picture (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    housing_id UUID NOT NULL,
    url TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (housing_id) REFERENCES public.housing(id) ON DELETE CASCADE
);
ALTER TABLE public.housing_picture ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.user_picture (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    url TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);
ALTER TABLE public.user_picture ENABLE ROW LEVEL SECURITY;

-- Favorites table
CREATE TABLE public.favorites (
    user_id UUID NOT NULL,
    housing_id UUID NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (user_id, housing_id),
    FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE,
    FOREIGN KEY (housing_id) REFERENCES public.housing(id) ON DELETE CASCADE
);
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

-- Chat tables
CREATE TABLE public.chat (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    owner_id UUID NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE,
    FOREIGN KEY (owner_id) REFERENCES public.users(id) ON DELETE CASCADE
);
ALTER TABLE public.chat ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chat_id UUID NOT NULL,
    writer_id UUID NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (chat_id) REFERENCES public.chat(id) ON DELETE CASCADE,
    FOREIGN KEY (writer_id) REFERENCES public.users(id) ON DELETE CASCADE
);
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.attachment (
    id UUID DEFAULT gen_random_uuid(),
    message_id UUID NOT NULL,
    url TEXT NOT NULL,
    mime_type VARCHAR(100),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (id, message_id),
    FOREIGN KEY (message_id) REFERENCES public.messages(id) ON DELETE CASCADE
);
ALTER TABLE public.attachment ENABLE ROW LEVEL SECURITY;

-- Create indexes for better performance
CREATE INDEX idx_housing_owner ON public.housing(owner_id);
CREATE INDEX idx_reviews_housing ON public.reviews(housing_id);
CREATE INDEX idx_favorites_user ON public.favorites(user_id);
CREATE INDEX idx_messages_chat ON public.messages(chat_id);

-- Timestamp update function for updated_at columns
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for tables with updated_at
CREATE TRIGGER update_users_modtime
BEFORE UPDATE ON public.users
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_housing_modtime
BEFORE UPDATE ON public.housing
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

CREATE TRIGGER update_reviews_modtime
BEFORE UPDATE ON public.reviews
FOR EACH ROW EXECUTE FUNCTION update_modified_column();

FROM php:7.4.16-apache

RUN docker-php-ext-install \
    # extention for mysql pdo
    pdo_mysql \
    # for laravel work
    && a2enmod \
    rewrite
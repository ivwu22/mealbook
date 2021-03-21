const passport = require('../../config/ppConfig');
const db = require('../../models');
const express = require('express');

const helperController = require('../helperController');

const getProfilePage = async (req, res) => {
    try {
        res.render('user/profile');
    } catch (error){
        res.render('main/404.ejs', {error:error})
    }
}

const editProfilePage = async (req, res) => {
    try {
        res.render('user/profileEdit.ejs')
    } catch (error){
        res.render('main/404.ejs', {error:error})
    }
}

const updateProfilePage = async (req, res) => {
    try {
        const userUpdate = await db.user.update({name:req.body.name.toLowerCase(), email:req.body.email, password:req.body.password},{where:{id:req.user.id}})
        res.redirect('/user/profile');
    } catch (error){
        res.render('main/404.ejs', {error:error})
    }
    
}

module.exports = {
    getProfilePage,
    editProfilePage,
    updateProfilePage
}